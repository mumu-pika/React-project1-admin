import { Chart, Interval } from 'bizcharts';
import React from 'react';

const Bar = () => {

  const data = [
    { year: ' 一月', sales: 10 },
    { year: ' 二月', sales: 20 },
    { year: ' 三月', sales: 30 },
    { year: ' 四月', sales: 40 },
    { year: ' 五月', sales: 40 },
    { year: ' 六月', sales: 50 },
    { year: ' 七月', sales: 40 },
    { year: ' 八月', sales: 40 },
    { year: ' 九月', sales: 50 },
    { year: ' 十月', sales: 20 },
    { year: ' 十一月', sales: 10 },
    { year: ' 十二月', sales: 40 },

  ];

	return (
		<Chart height={300} autoFit data={data}>
			<Interval position="year*sales" />
		</Chart>
	);
};

export default Bar;