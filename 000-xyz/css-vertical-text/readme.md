# css vertical text

CSS 垂直字体显示

https://www.cnblogs.com/xgqfrms/p/13816441.html#4705901


## text transform rotate

```css

.rotate:hover {
  transform: rotate(90deg);
}

.rotate-x:hover {
  transform: rotateX(90deg);
}

.rotate-y:hover {
  transform: rotateY(90deg);
}

.rotate-z:hover {
  transform: rotateZ(90deg);
}

/* x,y,z,deg */
/* 0~255  */
.rotate-3d:hover {
  transform: rotate3d(1, 1, 1, 90deg);
}

.rotate-3d-0:hover {
  transform: rotate3d(0, 0, 0, 90deg);
}

.rotate-3d-255:hover {
  transform: rotate3d(255, 255, 255, 90deg);
}



```


## text writing-mode

```css

/* writing-mode */

.vertical-lr {
  writing-mode: vertical-lr;
}

.vertical-rl {
  writing-mode: vertical-rl;
}


.horizontal-tb {
  writing-mode: horizontal-tb;
}

.sideways-lr {
  writing-mode: sideways-lr;
}

.sideways-rl {
  writing-mode: sideways-rl;
}
```
https://www.sitepoint.com/introduction-css-will-change-property/

