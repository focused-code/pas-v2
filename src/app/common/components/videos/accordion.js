import { Children, cloneElement, Component } from 'react';
import {
  Card, CardBody, Collapse,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { HeaderButton, HeaderContainer, AccHeader, HeaderItem, MainContainer } from './accordion-styles';

const AccordionHeader = ({ children, isOpen, onClick }) => (
  <AccHeader className={(isOpen) ? 'active-item' : ''}>
    <HeaderContainer>
      <HeaderItem>
        <HeaderButton isOpen={isOpen} onClick={onClick}>
          {children} {(isOpen) ? <i className="fa fa-angle-double-down" /> : <i className="fa fa-angle-double-left" />}
        </HeaderButton>
      </HeaderItem>
    </HeaderContainer>
  </AccHeader>
);

const AccordionBody = ({ children, isOpen }) => (
  <Collapse isOpen={isOpen}>
    <CardBody className="imp-action-details">
      {children}
    </CardBody>
  </Collapse>
);

const AccordionItem = (props) => {
  const { children, isOpen, onClick } = props;
  return (
    <Card>
      {Children.map(children, (child) => {
        if (child.type === AccordionHeader) {
          return cloneElement(child, { onClick, isOpen });
        }

        if (child.type === AccordionBody) {
          return cloneElement(child, { isOpen });
        }

        return null;
      })}
    </Card>
  );
};

export class Accordion extends Component {
  state = {
    open: this.props.open,
  }

  toggleSection = index => () => {
    this.setState(({ open }) => ({
      open: index === open ? undefined : index,
    }));
  }

  render() {
    return (
      <MainContainer>
        {Children.map(this.props.children, (child, index) => {
          if (child.type !== AccordionItem) return null;
          return cloneElement(child, {
            isOpen: child.props.open || this.state.open === index,
            onClick: this.toggleSection(index),
          });
        })}
      </MainContainer>
    );
  }
}

Accordion.propTypes = {
  open: PropTypes.number,
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
