(() => {
  if (document.body.classList.contains("content-page")) {
    const params = new URLSearchParams(window.location.search);
    if (params.get("window") === "1") {
      document.body.classList.add("windowed");
    }
  }

  const ghostCanvas = document.querySelector(".ghost-canvas");

  if (ghostCanvas) {
    const ghostCtx = ghostCanvas.getContext("2d");
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.3;
    let currentX = targetX;
    let currentY = targetY;
    let previousX = currentX;
    let previousY = currentY;
    let velocity = 0;
    let angle = 0;
    let ghostVisible = false;
    let dpr = window.devicePixelRatio || 1;

    const feedbackScale = 0.23;
    let feedbackWidth = 0;
    let feedbackHeight = 0;
    let feedbackA = document.createElement("canvas");
    let feedbackB = document.createElement("canvas");
    let feedbackCtxA = feedbackA.getContext("2d");
    let feedbackCtxB = feedbackB.getContext("2d");
    let colorBuffer = document.createElement("canvas");
    let colorCtx = colorBuffer.getContext("2d");

    const clamp01 = (value) => Math.min(1, Math.max(0, value));
    const smoothstep = (edge0, edge1, x) => {
      const t = clamp01((x - edge0) / (edge1 - edge0));
      return t * t * (3 - 2 * t);
    };

    const resizeGhostCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      ghostCanvas.width = Math.floor(window.innerWidth * dpr);
      ghostCanvas.height = Math.floor(window.innerHeight * dpr);
      ghostCtx.setTransform(1, 0, 0, 1, 0, 0);
      ghostCtx.scale(dpr, dpr);

      feedbackWidth = Math.max(2, Math.floor(window.innerWidth * feedbackScale));
      feedbackHeight = Math.max(2, Math.floor(window.innerHeight * feedbackScale));
      feedbackA.width = feedbackWidth;
      feedbackA.height = feedbackHeight;
      feedbackB.width = feedbackWidth;
      feedbackB.height = feedbackHeight;
      feedbackCtxA = feedbackA.getContext("2d");
      feedbackCtxB = feedbackB.getContext("2d");
      colorBuffer.width = feedbackWidth;
      colorBuffer.height = feedbackHeight;
      colorCtx = colorBuffer.getContext("2d");
    };

    resizeGhostCanvas();

    window.addEventListener("mousemove", (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      ghostVisible = true;
    }, { passive: true });

    window.addEventListener("mouseleave", () => {
      ghostVisible = false;
    });
    window.addEventListener("resize", resizeGhostCanvas);

    const renderGhostCursor = () => {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;

      const deltaX = currentX - previousX;
      const deltaY = currentY - previousY;
      const instantSpeed = Math.hypot(deltaX, deltaY);
      velocity += (instantSpeed - velocity) * 0.2;
      if (velocity > 0.02) {
        angle = Math.atan2(deltaY, deltaX);
      }

      const fxX = currentX * feedbackScale;
      const fxY = currentY * feedbackScale;
      const fxVel = velocity * feedbackScale;
      const tailLength = Math.min(68, 14 + fxVel * 12);
      const tailThickness = Math.min(5.5, 1.6 + fxVel * 1.4);
      const startX = fxX - Math.cos(angle) * tailLength;
      const startY = fxY - Math.sin(angle) * tailLength;

      feedbackCtxB.clearRect(0, 0, feedbackWidth, feedbackHeight);
      feedbackCtxB.save();
      feedbackCtxB.filter = "blur(2.2px)";
      feedbackCtxB.globalAlpha = 0.94;
      feedbackCtxB.drawImage(feedbackA, 0, 0);
      feedbackCtxB.restore();

      feedbackCtxB.save();
      feedbackCtxB.fillStyle = "rgba(4, 0, 14, 0.055)";
      feedbackCtxB.fillRect(0, 0, feedbackWidth, feedbackHeight);
      feedbackCtxB.restore();

      if (ghostVisible) {
        feedbackCtxB.save();
        feedbackCtxB.globalCompositeOperation = "lighter";
        feedbackCtxB.lineCap = "round";
        feedbackCtxB.lineJoin = "round";
        feedbackCtxB.shadowBlur = 4;
        feedbackCtxB.shadowColor = "rgba(171, 90, 255, 0.85)";

        const tailGradient = feedbackCtxB.createLinearGradient(startX, startY, fxX, fxY);
        tailGradient.addColorStop(0, "rgba(78, 24, 216, 0)");
        tailGradient.addColorStop(0.24, "rgba(96, 38, 235, 0.12)");
        tailGradient.addColorStop(0.56, "rgba(133, 66, 250, 0.36)");
        tailGradient.addColorStop(0.84, "rgba(183, 109, 255, 0.62)");
        tailGradient.addColorStop(1, "rgba(254, 235, 255, 0.95)");

        feedbackCtxB.strokeStyle = tailGradient;
        feedbackCtxB.lineWidth = tailThickness;
        feedbackCtxB.beginPath();
        feedbackCtxB.moveTo(startX, startY);
        feedbackCtxB.lineTo(fxX, fxY);
        feedbackCtxB.stroke();

        const halo = feedbackCtxB.createRadialGradient(fxX, fxY, 0, fxX, fxY, 10);
        halo.addColorStop(0, "rgba(223, 185, 255, 0.35)");
        halo.addColorStop(0.35, "rgba(189, 126, 255, 0.21)");
        halo.addColorStop(1, "rgba(145, 89, 245, 0)");
        feedbackCtxB.fillStyle = halo;
        feedbackCtxB.beginPath();
        feedbackCtxB.arc(fxX, fxY, 10, 0, Math.PI * 2);
        feedbackCtxB.fill();

        const core = feedbackCtxB.createRadialGradient(fxX, fxY, 0.8, fxX, fxY, 3);
        core.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        core.addColorStop(0.4, "rgba(235, 207, 255, 0.9)");
        core.addColorStop(1, "rgba(198, 130, 255, 0.76)");
        feedbackCtxB.fillStyle = core;
        feedbackCtxB.beginPath();
        feedbackCtxB.arc(fxX, fxY, 3, 0, Math.PI * 2);
        feedbackCtxB.fill();
        feedbackCtxB.restore();
      }

      const raw = feedbackCtxB.getImageData(0, 0, feedbackWidth, feedbackHeight);
      const mapped = colorCtx.createImageData(feedbackWidth, feedbackHeight);
      for (let i = 0; i < raw.data.length; i += 4) {
        const value = raw.data[i] / 255;
        const grain = (Math.random() - 0.5) * 0.06;
        const red = smoothstep(0.05, 0.55, value);
        const green = smoothstep(0.18, 0.72, value);
        const blue = smoothstep(0.05, 0.34, value);
        const intensity = Math.max(red, green, blue);

        if (intensity < 0.01) {
          mapped.data[i] = 0;
          mapped.data[i + 1] = 0;
          mapped.data[i + 2] = 0;
          mapped.data[i + 3] = 0;
          continue;
        }

        mapped.data[i] = clamp01(red + grain) * 255;
        mapped.data[i + 1] = clamp01(green + grain * 0.7) * 255;
        mapped.data[i + 2] = clamp01(blue + grain * 0.5) * 255;
        mapped.data[i + 3] = clamp01(intensity * 0.95) * 255;
      }
      colorCtx.putImageData(mapped, 0, 0);

      ghostCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ghostCtx.save();
      ghostCtx.globalCompositeOperation = "lighter";
      ghostCtx.imageSmoothingEnabled = true;
      ghostCtx.drawImage(colorBuffer, 0, 0, window.innerWidth, window.innerHeight);
      ghostCtx.restore();

      const swapCanvas = feedbackA;
      feedbackA = feedbackB;
      feedbackB = swapCanvas;
      const swapCtx = feedbackCtxA;
      feedbackCtxA = feedbackCtxB;
      feedbackCtxB = swapCtx;

      previousX = currentX;
      previousY = currentY;
      requestAnimationFrame(renderGhostCursor);
    };

    renderGhostCursor();
  }

  document.querySelectorAll(".board-card").forEach((card) => {
    const img = card.querySelector(".board-image");
    if (!img || !img.dataset.hover) return;
    const defaultSrc = img.src;
    const hoverSrc = img.dataset.hover;

    card.addEventListener("mouseenter", () => {
      img.src = hoverSrc;
    });
    card.addEventListener("mouseleave", () => {
      img.src = defaultSrc;
    });
  });

  const windowLayer = document.querySelector(".window-layer");
  const boardCards = document.querySelectorAll(".home-page .board-card");
  let topZ = 320;
  let openCount = 0;
  const openWindows = new Map();

  const focusWindow = (win) => {
    topZ += 1;
    document.querySelectorAll(".desktop-window").forEach((item) => {
      item.classList.toggle("is-focused", item === win);
    });
    win.style.zIndex = String(topZ);
  };

  const constrainWindow = (win) => {
    const margin = 12;
    const rect = win.getBoundingClientRect();
    const maxLeft = window.innerWidth - Math.min(120, rect.width);
    const maxTop = window.innerHeight - 64;
    const nextLeft = Math.min(Math.max(margin, rect.left), Math.max(margin, maxLeft));
    const nextTop = Math.min(Math.max(margin, rect.top), Math.max(margin, maxTop));
    win.style.left = `${nextLeft}px`;
    win.style.top = `${nextTop}px`;
  };

  const makeDraggable = (win, handle) => {
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;
    let dragging = false;

    const move = (event) => {
      if (!dragging) return;
      if (event.cancelable) event.preventDefault();
      const pointer = event.touches ? event.touches[0] : event;
      win.style.left = `${startLeft + pointer.clientX - startX}px`;
      win.style.top = `${startTop + pointer.clientY - startY}px`;
      constrainWindow(win);
    };

    const stop = () => {
      dragging = false;
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", stop);
    };

    const start = (event) => {
      if (event.target.closest(".window-button")) return;
      const pointer = event.touches ? event.touches[0] : event;
      dragging = true;
      focusWindow(win);
      startX = pointer.clientX;
      startY = pointer.clientY;
      startLeft = win.offsetLeft;
      startTop = win.offsetTop;
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", stop);
      document.addEventListener("touchmove", move, { passive: false });
      document.addEventListener("touchend", stop);
    };

    handle.addEventListener("mousedown", start);
    handle.addEventListener("touchstart", start, { passive: true });
  };

  const openBoardWindow = (card) => {
    if (!windowLayer) return;
    const href = card.getAttribute("href");
    if (!href) return;

    const existing = openWindows.get(href);
    if (existing) {
      focusWindow(existing);
      return;
    }

    const label = card.querySelector(".board-label")?.textContent?.trim() || "Board";
    const tag = card.querySelector(".board-tag")?.textContent?.trim() || "Gunpla";
    const win = document.createElement("section");
    const titlebar = document.createElement("div");
    const title = document.createElement("div");
    const controls = document.createElement("div");
    const closeButton = document.createElement("button");
    const frame = document.createElement("iframe");

    win.className = "desktop-window";
    win.setAttribute("role", "dialog");
    win.setAttribute("aria-label", `${label} window`);
    titlebar.className = "window-titlebar";
    title.className = "window-title";
    title.textContent = `${tag} / ${label}`;
    controls.className = "window-controls";
    closeButton.className = "window-button";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", `Close ${label}`);
    closeButton.textContent = "×";
    frame.className = "window-frame";
    frame.title = label;
    frame.src = `${href}?window=1`;

    controls.append(closeButton);
    titlebar.append(title, controls);
    win.append(titlebar, frame);
    windowLayer.append(win);

    const offset = (openCount % 6) * 28;
    win.style.left = `${Math.max(16, (window.innerWidth - 880) / 2 + offset)}px`;
    win.style.top = `${Math.max(72, (window.innerHeight - 680) / 2 + offset)}px`;
    openCount += 1;

    makeDraggable(win, titlebar);
    focusWindow(win);
    constrainWindow(win);
    openWindows.set(href, win);

    win.addEventListener("mousedown", () => focusWindow(win));
    closeButton.addEventListener("click", () => {
      openWindows.delete(href);
      win.remove();
    });
  };

  boardCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      openBoardWindow(card);
    });
  });

  window.addEventListener("resize", () => {
    document.querySelectorAll(".desktop-window").forEach(constrainWindow);
  });
})();
