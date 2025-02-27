export const enum Pointers {
  /** No pointing device is available */
  none = 'none',
  /** A pointing device is present, but it is not very precise */
  coarse = 'coarse',
  /** A highly accurate pointing device is available */
  fine = 'fine',
}

export const enum Hovers {
  /** A device which can't hover, touch panel, stylus */
  none = 'none',
  /** A device which can hover, mouse, joystick */
  hover = 'hover'
}
