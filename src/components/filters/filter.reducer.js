export default function filterReducer(state, action) {
  switch (action.type) {
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sort: "",
        brands: [],
        sizes: [],
        idealFor: [],
      };
    case "HIGH_TO_LOW":
      return {
        ...state,
        sort: "HTOL",
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        sort: "LTOH",
      };
    case "INCLUDE_BRAND":
      return {
        ...state,
        brands: [...state.brands, action.payload.brand],
      };
    case "REMOVE_BRAND":
      return {
        ...state,
        brands: state.brands.filter((brand) => brand !== action.payload.brand),
      };
    case "INCLUDE_SIZE":
      return {
        ...state,
        sizes: [...state.sizes, action.payload.size],
      };
    case "REMOVE_SIZE":
      return {
        ...state,
        sizes: state.sizes.filter((size) => size !== action.payload.size),
      };
    case "INCLUDE_IDEAL_FOR":
      return {
        ...state,
        idealFor: [...state.idealFor, action.payload.idealFor],
      };
    case "REMOVE_IDEAL_FOR":
      return {
        ...state,
        idealFor: state.idealFor.filter(idealFor => idealFor !== action.payload.idealFor)
      };
    default:
      return state;
  }
}
