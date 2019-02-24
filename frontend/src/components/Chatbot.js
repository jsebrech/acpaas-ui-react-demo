import React from 'react';
import ReactDOM from 'react-dom';

const ChatbotWidget = window.auiEmbeddableWidgets.reactComponent(
  // url to the definition
  "https://widgets-o.antwerpen.be/definitions/chatbot.json",
  { React, ReactDOM }
)

const chatbot = (prop) => {
	return (
    <div className="row">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <ChatbotWidget 
          chatbot="demo" 
          title="Demo" />
      </div>
    </div>
  );
}

export default chatbot;