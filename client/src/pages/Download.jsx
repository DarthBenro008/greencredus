/* eslint-disable */
import React, { useEffect } from "react";
import usePWA from "react-pwa-install-prompt";

export default function Download() {
    const { promptInstall, isInstallPromptSupported, isStandalone } = usePWA();

    useEffect(async () => {
        let deferredPrompt;

        window.addEventListener("beforeinstallprompt", (e) => {
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI notify the user they can add to home screen
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User accepted the A2HS prompt");
                } else {
                    console.log("User dismissed the A2HS prompt");
                }
                deferredPrompt = null;
            });
        });
        const didInstall = await promptInstall();
        if (didInstall) {
            // User accepted PWA install
        }
    }, []);

    return (
        <div>
            Your Download Must have started!{" "}
            {isInstallPromptSupported ? "True" : "False"}
            {"\n"}
            {isStandalone ? "Is standaalone" : "Is not standalone"}
        </div>
    );
}
