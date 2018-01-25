import React from 'react';

const Voter = ({votes, onVote}) => (
    <div className="ic-div">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        {votes}
        <button className="bt voteUp" onClick={() => onVote('up')} >+1</button >
        <button className="bt voteDown" onClick={() => onVote('down')}   >-1</button>
    </div>
)

export default Voter;