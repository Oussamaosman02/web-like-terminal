"use client";
import { Fragment, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const tipo = useRef();
  const [messi, setMessi] = useState([]);
  const term = [
    {
      name: "help",
      desc: ["Esta es la ayuda"],
    },
    {
      name: "ls",
      desc: ["messi/", "red.md"],
    },
    {
      name: "cd messi",
      desc: ["Estas en messi"],
    },
  ];
  function handleChange({ key }) {
    const valor = tipo.current.value;
    if (key === "Enter") {
      setMessi([...messi, valor]);
      tipo.current.value = "";
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terminal</h1>
      <div className={styles.terminal}>
        {messi.map((dat, i) => {
          return (
            <Fragment key={dat + "" + i}>
              <span>JavaScript &gt; {dat}</span>
              {term.map((ter) => {
                if (dat === ter.name) {
                  return (
                    <div key={dat + "" + ter + i}>
                      {ter.desc.map((al) => {
                        return (
                          <Fragment key={dat + "" + al + ter + i}>
                            <span>{al}</span>
                            <br />
                          </Fragment>
                        );
                      })}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </Fragment>
          );
        })}
      </div>
      <div className={styles.inpcont}>
        <span>JavaScript &gt; </span>
        <input
          className={styles.inpu}
          ref={tipo}
          type="text"
          onKeyDown={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
}
