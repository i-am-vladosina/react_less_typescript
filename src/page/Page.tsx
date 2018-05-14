import React from 'react';

import './Page.less';

export default class Page extends React.Component<{}, {}>
{
  private content: string[] = ['React', 'Typescript', 'Less', 'Local Server', 'General Libs'];

  private renderContentList(): React.ReactNode
  {
    return (
      <ul className="page__list">
        {
          this.content.map((item: string, key) => {
            return <li key={key} className="page__item">{item}</li>
          })
        }
      </ul>
    );
  }

  private renderLogo(): React.ReactNode
  {
    return <img src="./img/react-logo.svg" alt="react-logo" className="page__logo"/>
  }

  render()
  {
    return (
      <div className="page-wrapper">
        <div className="page">
          <h1 className="page__title">Starter Pack</h1>
          {this.renderContentList()}
          {this.renderLogo()}
        </div>
      </div>
    )
  }
}