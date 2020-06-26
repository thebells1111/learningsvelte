<script>
  import { onMount } from 'svelte';

  onMount(() => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var logo, overlay;

    var imageURLs = [];
    var imagesOK = 0;
    var imgs = [];
    imageURLs.push('../images/chalkboard-black.png');
    imageURLs.push('../images/brush.png');
    loadAllImages();

    function loadAllImages() {
      for (var i = 0; i < imageURLs.length; i++) {
        var img = new Image();
        img.src = imageURLs[i];
        img.onload = function () {
          imagesOK++;
          imagesAllLoaded();
        };
        imgs.push(img);
      }
    }

    var imagesAllLoaded = function () {
      if (imagesOK == imageURLs.length) {
        // all images are fully loaded an ready to use
        logo = imgs[0];
        overlay = imgs[1];
        start();
      }
    };

    function start() {
      // save the context state
      ctx.save();

      // draw the overlay
      ctx.drawImage(overlay, 0, 0, 260, 60);

      // change composite mode to source-in
      // any new drawing will only overwrite existing pixels
      ctx.globalCompositeOperation = 'source-in';

      ctx.drawImage(logo, 0, 0, 260, 60);

      // restore the context to it's original state
      ctx.restore();
    }
  });
</script>

<style>
  /* p {
    color: #f4f4f0;
    font-family: var(--font-title), cursive;
    font-size: 1.4em;
    position: relative;
    margin: 0;
    padding: 0;
    top: 10px;
    left: 42px;
  } */

  canvas {
    /* position: absolute; */
  }

  canvas {
    border: solid black 1px;
  }
</style>

<div>
  <canvas id="canvas" width="260" height="60" />
  <p href="." class="fredericka">Learning Svelte</p>
</div>
