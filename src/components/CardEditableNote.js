import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  MovableCardWrapper,
  CardHeader,
  CardTitle,
  Detail,
} from 'rt/styles/Base';
import TextInput from 'rt/widgets/TextInput';

class CardEditableNote extends Component {
  onDelete = e => {
    this.props.onDelete();
    e.stopPropagation();
  }

  render() {
    const {
      style,
      onClick,
      onChange,
      className,
      id,
      title,
      description,
      cardDraggable,
      note,
      assignedTo,
      assignedToList,
      onAssignedToChange = console.log,
    } = this.props;

    const updateCard = (card) => {
      onChange({ ...card, id });
    }

    const clickCard = (event) => {
      if (event?.target?.type === 'textarea') {
        return;
      }
      onClick(event);
    }

    const displayAssignedTo = (assignedTo || Object.keys(assignedToList).length) &&
      <select onChange={({ target: { value } }) => updateCard({ assignedTo: value })} value={assignedTo} style={{ flexGrow: 2 }}>
        <option value>{" "}</option>
        {Object.keys(assignedToList).map((item, key) => <option key={`assigned-to-${key}`} value={item}>{assignedToList[item]}</option>)}
      </select> || null;

    return (
      <MovableCardWrapper
        data-id={id}
        style={style}
        className={className}
      >
        <CardHeader>
          <CardTitle draggable={cardDraggable}>
            {title}
          </CardTitle>
        </CardHeader>
        <Detail>
          {description}
          <div style={{ display: 'flex' }}>
            &#x02261;
            <div style={{ flexGrow: 1 }}>
              <TextInput value={note} border placeholder={"Notes"} resize='vertical' onSave={(value) => updateCard({ note: value })} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: displayAssignedTo ? "space-between" : "right" }}>
            {displayAssignedTo}
            <button onClick={clickCard}>View</button>
          </div>
        </Detail>
      </MovableCardWrapper>
    );
  }
}

CardEditableNote.propTypes = {
  onEdit: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  note: PropTypes.string,
  optionBtnText: PropTypes.string,
  optionBtnOnClick: PropTypes.func,
  assignedTo: PropTypes.string,
  assignedToList: PropTypes.arrayOf(PropTypes.object),
  onAssignedToChange: PropTypes.func
};

CardEditableNote.defaultProps = {
  onEdit: () => { },
  onClick: () => { },
  style: {},
  className: '',
  title: 'no title',
  description: '',
  note: '',
  optionBtnText: null,
  optionBtnOnClick: null,
  assignedTo: "",
  assignedToList: {},
  onAssignedToChange: () => { },
};

export default CardEditableNote;
