import * as React from 'react';

function SvgCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M0 11c2.761.575 6.312 1.688 9 3.438C12.157 10.208 17.828 6.251 24 3c-5.861 5.775-10.711 12.328-14 18.917C7.349 18.151 4.453 14.646 0 11z" />
    </svg>
  );
}

export default SvgCheckIcon;
