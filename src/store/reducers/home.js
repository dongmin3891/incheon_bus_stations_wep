const CH_HOME_STATION_TIME = 'HOMEINFO/CH_HOME_STATION_TIME';

export const setHomeInfo = (type, data) => ({type, data});

const initialState = {
  time : {
    oneTime: "",
    oneStation: "",
    twoTime: "",
    twoStation: ""
  }
}

const homeInfoReducer = (state = initialState , action) => {
  switch (action.type) {
    case CH_HOME_STATION_TIME:
      return {
        ...state,
        time : {
          oneTime: action.data.oneTime,
          oneStation: action.data.oneStation,
          twoTime: action.data.twoTime,
          twoStation: action.data.twoStation
        }
      };
    default:
      return state;
  }
}

export default homeInfoReducer;


//2960 x 1440