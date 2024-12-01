export default function Spinner() {
    return (
      <div aria-live="polite">
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
          {[...Array(3)].map((_, index) => (
            <circle key={index} cx="12" cy="12" r="0" fill="#ccc">
              <animate
                fill="freeze"
                attributeName="r"
                begin={`${index * 0.2}s`}
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                values="0;11"
              />
              <animate
                fill="freeze"
                attributeName="opacity"
                begin={`${index * 0.2}s`}
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                values="1;0"
              />
            </circle>
          ))}
        </svg>
      </div>
    );
  }