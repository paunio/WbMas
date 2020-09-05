import { getSD } from "./equations";

export const serialize = (data) => {
  if (!Array.isArray(data)) {
    if (data.TEMP) {
      return {
        value: data.TEMP,
        time: data.time,
      };
    }

    if (data.PRESS) {
      return {
        value: data.PRESS,
        time: data.time,
      };
    }

    if (data.LIGHT) {
      return {
        value: data.LIGHT,
        time: data.time,
      };
    }
  } else {
    const newData = data.map((val) => {
      if (val.TEMP) {
        return {
          value: val.TEMP,
          time: val.time,
        };
      }

      if (val.PRESS) {
        return {
          value: val.PRESS,
          time: val.time,
        };
      }

      if (val.LIGHT) {
        return {
          value: val.LIGHT,
          time: val.time,
        };
      }

      return null;
    });

    return newData;
  }
};

export const checkMax = (data, cb) => {
  if (data.datasets[0].data.length !== 0)
    cb(Math.max(...data.datasets[0].data));
};

export const checkStDev = (data, cb) => {
  if (data.datasets[0].data.length !== 0) cb(getSD(data.datasets[0].data));
};

export const getMaxTime = (data, max) => {
  return data.labels[data.datasets[0].data.indexOf(max.toString())];
};

export const setStateData = (oldData, index, d) => {
  const dataArr = [];
  const timeArr = [];

  if (Array.isArray(d)) {
    d.map((el) => {
      dataArr.push(el.value);
      timeArr.push(el.time);

      return el;
    });

    return {
      labels: timeArr,
      datasets: [
        {
          ...oldData.datasets[index],
          data: dataArr,
        },
      ],
    };
  } else
    return {
      labels: [...oldData.labels, d.time],
      datasets: [
        {
          ...oldData.datasets[index],
          data: [...oldData.datasets[index].data, d.value],
        },
      ],
    };
};
