import { connect } from "react-redux";
import { IndexPage } from "../components/indexPage";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
  const { review: { list: reviews } } = state;

  return {
    reviews,
  };
}

export default connect( mapStateToProps )( IndexPage );
