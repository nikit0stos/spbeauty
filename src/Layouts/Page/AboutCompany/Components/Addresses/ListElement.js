import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    color: #666787;
`;

function ListElement(props) {
    return (
    <div class="d-inline-flex">
    <Option>{props.children}</Option>
    <IconOnlyButton icon={<EditIcon/>}/>
    <IconOnlyButton icon={<RemoveIcon/>}/>
    </div>
    );
    }
    
    export default ListElement