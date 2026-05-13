import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Mission from "@/pages/Mission";
import Programs from "@/pages/Programs";
import MasterclassDetails from "@/pages/MasterclassDetails";
import AriaMasterclassDetails from "@/pages/AriaMasterclassDetails";
import PastEventStAnthony from "@/pages/PastEventStAnthony";
import PastAriaMasterclassDetails from "@/pages/PastAriaMasterclassDetails";
import PastAriaMasterclassDetailsApril from "@/pages/PastAriaMasterclassDetailsApril";
import { useEffect } from "react";

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/mission" component={Mission} />
        <Route path="/programs" component={Programs} />
        <Route path="/masterclass-morris-robinson" component={MasterclassDetails} />
        <Route path="/programs/aria-masterclass-series" component={AriaMasterclassDetails} />
        <Route path="/past-events/aria-masterclass-series" component={PastAriaMasterclassDetails} />
        <Route path="/past-events/aria-masterclass-series-april" component={PastAriaMasterclassDetailsApril} />
        <Route path="/past-event-st-anthony" component={PastEventStAnthony} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
