// @ts-expect-error
import "@fontsource-variable/geist-mono";

import "./style.css";

function manageDialogs() {
  const triggers = [
    ...document.querySelectorAll<HTMLElement>("button[data-modal-id]"),
  ];

  if (triggers.length === 0) return;

  for (let trigger of triggers) {
    const dialogId = trigger.dataset["modalId"];

    if (!dialogId) {
      continue;
    }

    const dialog = document.querySelector<HTMLDialogElement>(`#${dialogId}`);

    if (!dialog) {
      continue;
    }

    const closeTrigger =
      dialog.querySelector<HTMLElement>("button[data-close]");
    if (!closeTrigger) {
      continue;
    }

    trigger.addEventListener("click", (event : MouseEvent) => {
        event.preventDefault();
        dialog?.showModal();
    });

    closeTrigger.addEventListener("click", (event : MouseEvent) => {
        event.preventDefault();
        dialog?.close();
    });
  }
}

manageDialogs();
