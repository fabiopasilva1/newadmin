import * as types from "../constants/types";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case types.LOADING: {
      return { loading: true };
    }
    case types.POSTS_SUCCESS: {
      return { ...state, postsData: action.payload, loading: false };
    }
    case types.PATCH_SUCCESS: {
      return { ...state, postsData: action.payload, loading: false };
    }
  }
};
