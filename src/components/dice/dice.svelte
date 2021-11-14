<div class="container">
  <div class="cube">
    <div class="side front"></div>
    <div class="side left"></div>
    <div class="side right"></div>
    <div class="side back"></div>
    <div class="side top"></div>
    <div class="side bottom"></div>
  </div>
</div>

<style>
.container {
  width: 400px;
  height: 400px;
  border: 2px solid white;
  border-radius: 4px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-align: center;
          align-items: center;
  -webkit-perspective: 800px;
          perspective: 800px;
  -webkit-perspective-origin: top right;
          perspective-origin: top right;
}

.cube {
  position: relative;
  width: 200px;
  height: 200px;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}

.side {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  border: 2px solid white;
}

.front {
  background-color: #d50000;
  -webkit-transform: translateZ(100px);
          transform: translateZ(100px);
}

.back {
  background-color: #aa00ff;
  -webkit-transform: translateZ(-100px);
          transform: translateZ(-100px);
}

.left {
  background-color: #304ffe;
  -webkit-transform: rotateY(90deg) translateZ(100px);
          transform: rotateY(90deg) translateZ(100px);
}

.right {
  background-color: #0091ea;
  -webkit-transform: rotateY(-90deg) translateZ(100px);
          transform: rotateY(-90deg) translateZ(100px);
}

.top {
  background-color: #00bfa5;
  -webkit-transform: rotateX(90deg) translateZ(100px);
          transform: rotateX(90deg) translateZ(100px);
}

.bottom {
  background-color: #64dd17;
  -webkit-transform: rotateX(-90deg) translateZ(100px);
          transform: rotateX(-90deg) translateZ(100px);
}
</style>
