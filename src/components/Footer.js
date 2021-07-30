import React, { Component } from 'react';
import { Footer, grommet, Grommet, Text, Anchor } from 'grommet';
import {Github} from 'grommet-icons'

class FooterBar extends Component {
    render() {
        const mystyle = {
            //left and bottom don't work in React, leaving this in case I want to make a floating footer
        };
      return (
        <Grommet theme={grommet}>
        <Footer background="light-4" justify="center" pad="small" style={mystyle}>
          <Text textAlign="center" size="small">
            © Developed by Joseph Cosgrove for Paymerang
            <Anchor
            a11yTitle="Share feedback on Github"
            href="https://github.com/jyc5331"
            icon={<Github color="brand" />}
            />
          </Text>
        </Footer>
      </Grommet>
      );
    }
  }

export default FooterBar;