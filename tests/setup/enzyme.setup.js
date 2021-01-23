import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ShallowWrapper from 'enzyme/ShallowWrapper'
import until from 'enzyme-shallow-until'

configure({ adapter: new Adapter() })

ShallowWrapper.until = until