const LINEAR = 0;
const QUADRATIC = 1;
const CUBIC = 2;
const QUARTIC = 3;
const QUINTIC = 4;
const SINUSOIDAL = 5;
const EXPONENTIAL = 6;
const CIRCULAR = 7;
const SQRT = 8;
const EASE_IN = 0;
const EASE_OUT = 1;
const EASE_IN_OUT = 2;

function map2(value, start1, stop1, start2, stop2, type, when) {
  let b = start2;
  let c = stop2 - start2;
  let t = value - start1;
  let d = stop1 - start1;
  let p = 0.5;
  switch (type) {
  case LINEAR:
    return c*t/d + b;
  case SQRT:
    if (when === EASE_IN) {
      t /= d;
      return c*Math.pow(t, p) + b;
    } else if (when === EASE_OUT) {
      t /= d;
      return c * (1 - Math.pow(1 - t, p)) + b;
    } else if (when === EASE_IN_OUT) {
      t /= d/2;
      if (t < 1){
        return c/2*Math.pow(t, p) + b;
      }
      return c/2 * (2 - Math.pow(2 - t, p)) + b;
    }
    break;
  case QUADRATIC:
    if (when === EASE_IN) {
      t /= d;
      return c*t*t + b;
    } else if (when === EASE_OUT) {
      t /= d;
      return -c * t*(t-2) + b;
    } else if (when === EASE_IN_OUT) {
      t /= d/2;
      if (t < 1){
        return c/2*t*t + b;
      }
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }
    break;
  case CUBIC:
    if (when === EASE_IN) {
      t /= d;
      return c*t*t*t + b;
    } else if (when === EASE_OUT) {
      t /= d;
      t--;
      return c*(t*t*t + 1) + b;
    } else if (when === EASE_IN_OUT) {
      t /= d/2;
      if (t < 1){
        return c/2*t*t*t + b;
      }
      t -= 2;
      return c/2*(t*t*t + 2) + b;
    }
    break;
  case QUARTIC:
    if (when === EASE_IN) {
      t /= d;
      return c * t * t * t * t + b;
    } else if (when === EASE_OUT) {
      t /= d;
      t--;
      return -c * (t * t * t * t - 1) + b;
    } else if (when === EASE_IN_OUT) {
      t /= d / 2;
      if (t < 1){
        return c / 2 * t * t * t * t + b;
      }
      t -= 2;
      return -c / 2 * (t * t * t * t - 2) + b;
    }
    break;
  case QUINTIC:
    if (when === EASE_IN) {
      t /= d;
      return c * t * t * t * t * t + b;
    } else if (when === EASE_OUT) {
      t /= d;
      t--;
      return c * (t * t * t * t * t + 1) + b;
    } else if (when === EASE_IN_OUT) {
      t /= d / 2;
      if (t < 1){
        return c / 2 * t * t * t * t * t + b;
      }
      t -= 2;
      return c / 2 * (t * t * t * t * t + 2) + b;
    }
    break;
  case SINUSOIDAL:
    if (when === EASE_IN) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    } else if (when === EASE_OUT) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    } else if (when === EASE_IN_OUT) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
    break;
  case EXPONENTIAL:
    if (when == EASE_IN) {
      return c * Math.pow(2, 10 * (t/d - 1)) + b;
    } else if (when == EASE_OUT) {
      return c * (-Math.pow(2, -10 * t/d) + 1) + b;
    } else if (when == EASE_IN_OUT) {
      t /= d/2;
      if (t < 1){
        return c/2 * Math.pow(2, 10 * (t - 1)) + b;
      }
      t--;
      return c/2 * (-Math.pow(2, -10 * t) + 2) + b;
    }
    break;
  case CIRCULAR:
    if (when == EASE_IN) {
      t /= d;
      return -c * (Math.sqrt(1 - t*t) - 1) + b;
    } else if (when == EASE_OUT) {
      t /= d;
      t--;
      return c * Math.sqrt(1 - t*t) + b;
    } else if (when == EASE_IN_OUT) {
      t /= d/2;
      if (t < 1) {
        return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
      }
      t -= 2;
      return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
    }
    break;
  }
  return 0;
}
