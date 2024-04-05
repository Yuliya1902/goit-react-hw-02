import {
    Chart,
    Interval,
    Tooltip,
    Axis,
    Coordinate,
    getTheme,
  } from "bizcharts";
  
  const Chart1 = ({ good, neutral, bad, total }) => {
    const data = [
      {
        item: "good",
        percent: good / total,
      },
      { item: "neutral", percent: neutral / total },
      { item: "bad", percent: bad / total },
    ];
    const colors = data.reduce((pre, cur, idx) => {
      pre[cur.item] = getTheme().colors10[idx];
      return pre;
    }, {});
  
    const cols = {
      percent: {
        formatter: (val) => {
          val = Math.round(val * 100) + "%";
          return val;
        },
      },
    };
  
    return (
      <Chart
        height={400}
        data={data}
        scale={cols}
        interactions={["element-active"]}
        autoFit
      >
        <Coordinate type="theta" radius={0.75} />
        <Tooltip showTitle={false} />
        <Axis visible={false} />
        <Interval
          position="percent"
          adjust="stack"
          color="item"
          style={{
            lineWidth: 1,
            stroke: "#fff",
          }}
          label={[
            "item",
            (item) => {
              return {
                offset: 20,
                content: (data) => {
                  return `${data.item}\n ${Math.round(data.percent * 100)}%`;
                },
                style: {
                  fill: colors[item],
                },
              };
            },
          ]}
        />
      </Chart>
    );
  };
  
  export default Chart1;