import { cloneElement } from 'react';
import { AssessmentProvider } from './assessments';
import { AnalysisProvider } from './analysis';
import { ResourceProvider } from './resources';
import { ProspectsProvider } from './prospects';
import { VideoAnalysisProvider } from './video-analysis';
import { CoachingProvider } from './group-coaching';
import { EmailsProvider } from './emails';
import { LessonsProvider } from './lessons';
import { LoginProvider } from './login-state';
import { CoachingPortalProvider } from './coaching-portal';
import { FlashCoachingProvider } from './flash-coaching';
import { CustomGroupsProvider } from './gc-custom-groups';
import { OnboardingProvider } from './onboarding';
import { BusinessOnboardingProvider } from './business-onboarding';
import { OnboardingAnalysisProvider } from './onboarding-analysis';
import { OnboardingBusinessAnalysisProvider } from './onboarding-business-analysis';
import { ProfileProvider } from './profile-state';
import { TasksProvider } from './tasks';
import { ImplementationProvider } from './implementation';
import { EventsProvider } from './events';
import { NotificationsProvider } from './notifications';
import { LeadGenerationProvider } from './lead-generation';
import { AIProvider } from './ai';
import { withRouter } from '../helpers';


function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
        (kids, parent) => cloneElement(parent, {
            children: kids,
        }),
        children,
    );
}

const ContextProvider = withRouter(({ children }) => (
    <ProviderComposer contexts={
        [<AssessmentProvider />,
        <CoachingPortalProvider />,
            <FlashCoachingProvider />,
        <AnalysisProvider />,
        <ResourceProvider />,
        <CoachingProvider />,
        <EmailsProvider />,
        <VideoAnalysisProvider />,
        <ProspectsProvider />,
        <LessonsProvider />,
        <LoginProvider />,
        <CustomGroupsProvider />,
        <OnboardingProvider />,
        <BusinessOnboardingProvider />,
        <OnboardingAnalysisProvider />,
        <ProfileProvider />,
        <TasksProvider />,
        <ImplementationProvider />,
        <LeadGenerationProvider />,
        <EventsProvider />,
        <NotificationsProvider />,
            <AIProvider />,
        <OnboardingBusinessAnalysisProvider />
        ]}
    >
        {children}
    </ProviderComposer>
));

export { ContextProvider };
