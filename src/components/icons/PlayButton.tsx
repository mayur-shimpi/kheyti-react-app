import React from "react";

const HandMaintainSupport: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            {...props}
        >
            <g filter="url(#filter0_d_56_9)">
                <circle cx="50.5" cy="46.5" r="45" stroke="white" strokeWidth="3" />
                <path d="M66.5 44.4019C68.5 45.5566 68.5 48.4434 66.5 49.5981L45.5 61.7224C43.5 62.8771 41 61.4338 41 59.1244L41 34.8756C41 32.5662 43.5 31.1229 45.5 32.2776L66.5 44.4019Z" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_56_9" x="0" y="0" width="101" height="101" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_9" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_9" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default HandMaintainSupport;
