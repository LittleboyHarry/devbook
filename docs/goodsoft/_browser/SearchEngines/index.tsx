import React, { createContext, useContext } from 'react';
import ManualList from './ManualList';
import AutoAddTo from './_autolist.md';

export default function SearchEngines({
  autoAddTo,
  manualAddTo,
  firefox,
  chromium,
}: {
  autoAddTo?: boolean;
  manualAddTo?: boolean;
  firefox?: boolean;
  chromium?: boolean;
}) {
  if (autoAddTo) return <AutoAddTo {...{ firefox, chromium }} />;
  if (manualAddTo) return <ManualList {...{ chromium, firefox }} />;
}
