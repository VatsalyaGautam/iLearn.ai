const colorMap = {
  200: "text-blue-400 bg-gradient-to-r from-blue-400 to-blue-100",
  300: "text-blue-500 bg-gradient-to-r from-blue-500 to-blue-200",
  400: "text-blue-600 bg-gradient-to-r from-blue-600 to-blue-300",
  500: "text-blue-700 bg-gradient-to-r from-blue-700 to-blue-400",
  600: "text-blue-800 bg-gradient-to-r from-blue-800 to-blue-500",
  700: "text-blue-900 bg-gradient-to-r from-blue-900 to-blue-600",
};
const textMap = {
  200: "text-blue-200",
  300: "text-blue-300",
  400: "text-blue-400",
  500: "text-blue-500",
  600: "text-blue-600",
  700: "text-blue-700",
};

const getBlueGradient = (color) =>
  colorMap[color] || "text-blue-700 bg-gradient-to-r from-blue-700 to-blue-400";
const getBlueText = (color) => textMap[color] || "text-blue-500";

function Heading({ title, description, color = 500 }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2
          className={`text-4xl sm:text-5xl font-ubuntu p-1 font-bold bg-clip-text text-transparent mb-6 ${getBlueGradient(
            color
          )}`}
        >
          {title}
        </h2>
        <p
          className={`text-lg ${getBlueText(
            color
          )} mb-8 font-ubuntu leading-relaxed`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default Heading;
