
import * as React from 'react';
import './StatistiquesPage.css';



interface IStatistiquesPageProps {
    nbEpisodeSeen: number;
}

export class StatistiquesPage extends React.Component<IStatistiquesPageProps> {

  public render() {
    return (
      <div className="StatistiquesPage">
          <span>Statistiques</span>
        
      </div>
    );
  }
}
