import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className='sistema-solar'>
        <section className='planetas'>
        <Title headline="Planetas" />
        {planets.map(({ name, image }) => (
          <PlanetCard className='solar-son' planetName={ name } planetImage={ image } key={ name } />))}

        </section>
      </div>
    );
  }
}

export default SolarSystem;
