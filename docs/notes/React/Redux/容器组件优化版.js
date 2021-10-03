/* src/containers/Xxx/index.jsx */
import XxxUI from '../../components/Xxx/index.jsx'

import { connent } from 'react-redux'

import { createXxxAction } from './xxx_action'

export default connent(
  (state) => ({ number: state }), 
  /* mapDispatchToProps可以是一个对象 */
  /* mapDispatchToProps的一般写法 */
  /* 
    (dispatch) => ({
      jia: number => dispatch(createXxxAction(number))
    })
  */

  /* mapDispatchToProps的简写 */
  {
    Xxxx: createXxxAction
  }
)(XxxUI)