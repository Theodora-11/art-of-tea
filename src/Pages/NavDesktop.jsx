import { Route, Routes } from 'react-router-dom'
import NavPhone from './NavPhone'
import React from 'react-dom/client'

export default function NavDesktop() {

  const [isOpen, setIsOpen] = React.useState(false);
  closeMain(() => setIsOpen(false));
}