

export default function MessagesTop(props) {

  return(
    <div className="wrapper-header-front">
      <div className="wrapper-messages-header">

        <button
          onClick={props.backMessage} 
          className="material-symbols-outlined arrow back-message"
          title="back"
        >arrow_back_ios_new</button>

        <p className="message-text-header">{props.message}</p>
        <button 
          onClick={props.nextMessage} 
          className="material-symbols-outlined arrow next-message"
          title="next"
        >arrow_forward_ios</button>

      </div>
    </div>
  )
}