import React from 'react'
import TestRenderer from 'react-test-renderer'
import Theme from 'src/config/Theme'

describe('src/config/Theme', () => {

    it('should render the theme provider', () => {
        const testRenderer = TestRenderer.create(<Theme><span>TEST THEME</span></Theme>);
        expect(testRenderer).toMatchSnapshot();
    })

})