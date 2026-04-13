import React from 'react';
import PharmaShowcase from '../components/PharmaShowcase';
import AIShowcase from '../components/AIShowcase';
import WorkflowDisplay from '../components/WorkflowDisplay';
import LivePlatforms from '../components/LivePlatforms';
import AgentFactory from '../components/AgentFactory';
import InsightsStudio from '../components/InsightsStudio';
import InHouseTools from '../components/InHouseTools';
import Advantage from '../components/Advantage';

interface HomeProps {
    onOpenModal: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenModal }) => {
    return (
        <main>
            {/* New Hero Section for Landing Page */}
            <PharmaShowcase />
            <AIShowcase />
            <WorkflowDisplay />
            <LivePlatforms />
            <AgentFactory />
            <InsightsStudio />
            <InHouseTools />
            <Advantage onOpenModal={onOpenModal} />
        </main>
    );
};

export default Home;
