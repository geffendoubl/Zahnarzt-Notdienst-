export function ToothSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-tooth-breathe ${className}`}
      aria-hidden="true"
    >
      {/* Main crown + root outline — single anatomical stroke */}
      <path
        d="
          M 26 22
          C 20 10, 26 2, 34 4
          C 40 6, 45 14, 50 12
          C 55 10, 60 2, 67 4
          C 74 6, 79 14, 84 12
          C 89 10, 95 4, 100 8
          C 106 12, 107 22, 105 34
          C 103 50, 100 66, 97 80
          C 95 88, 93 95, 91 102
          C 89 110, 88 118, 88 126
          C 88 136, 89 148, 89 158
          C 89 170, 87 182, 85 192
          C 83 200, 81 208, 79 214
          C 78 219, 75 222, 72 220
          C 69 218, 67 211, 66 202
          C 65 192, 64 178, 64 164
          C 64 152, 63 142, 62 136
          C 61 142, 60 152, 60 164
          C 60 178, 59 192, 58 202
          C 57 211, 55 218, 52 220
          C 49 222, 46 219, 45 214
          C 43 208, 41 200, 39 192
          C 37 182, 35 170, 35 158
          C 35 148, 36 136, 36 126
          C 36 118, 35 110, 33 102
          C 31 95, 29 88, 27 80
          C 24 66, 21 50, 19 34
          C 17 22, 20 12, 26 22
          Z
        "
        stroke="#1aedff"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      {/* CEJ line — cemento-enamel junction */}
      <path
        d="M 33 102 C 48 108, 72 108, 88 102"
        stroke="#1aedff"
        strokeWidth="0.8"
        fill="none"
        opacity="0.45"
      />
      {/* Central developmental groove */}
      <path
        d="M 61 14 L 61 100"
        stroke="#1aedff"
        strokeWidth="0.6"
        fill="none"
        opacity="0.25"
      />
      {/* Bifurcation detail */}
      <path
        d="M 48 128 C 52 132, 58 134, 62 134 C 66 134, 72 132, 76 128"
        stroke="#1aedff"
        strokeWidth="0.7"
        fill="none"
        opacity="0.3"
      />
    </svg>
  )
}
