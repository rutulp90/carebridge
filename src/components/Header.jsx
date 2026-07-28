import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
export default function Header(){const [open,setOpen]=useState(false); return <>
<div className="topbar"><div className="container topbar__inner"><span>hello@carebridge.org</span><span>+1 555 019 245</span></div></div>
<header className="header"><div className="container header__inner"><a href="#home" className="brand"><Heart size={24} fill="currentColor"/>CareBridge</a><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button><nav className={open?'nav nav--open':'nav'}>{['home','causes','about','help','blog','contact'].map(i=><a key={i} href={`#${i}`} onClick={()=>setOpen(false)}>{i}</a>)}</nav><a className="btn btn--small header__cta" href="#contact">Donate now</a></div></header></>}
