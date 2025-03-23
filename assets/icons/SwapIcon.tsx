import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={28} height={28} viewBox="0 0 24 24" {...props}>
    <G
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      color={props.color}
    >
      <Path d="M20.5 5.5h-11C5.787 5.5 3 8.185 3 12m.5 6.5h11c3.713 0 6.5-2.685 6.5-6.5" />
      <Path d="M18.5 3S21 4.841 21 5.5 18.5 8 18.5 8m-13 8S3 17.841 3 18.5 5.5 21 5.5 21" />
    </G>
  </Svg>
);
export default SvgComponent;
