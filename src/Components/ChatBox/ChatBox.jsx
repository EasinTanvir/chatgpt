import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./chatbox.css";
import { Col, Row } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import MultipleValueTextInput from "react-multivalue-text-input";
import Loaders from "../Loaders";
import Multiselect from "multiselect-react-dropdown";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const scrollRef = useRef();
  const [value, setValue] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msgLoader, setMsgLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [store, setStore] = useState([]);
  const [gptData, setGptData] = useState([]);
  const [ageData, setAgeData] = useState({ role: "user", content: "" });
  const [weightData, setWeightData] = useState({ role: "user", content: "" });
  const [heightData, setHeightData] = useState({ role: "user", content: "" });
  const [sysmtomsData, setSysmtomsData] = useState([]);
  const [allergiesData, setAllergiesData] = useState([]);
  const [medicationData, setMedicationData] = useState([]);
  const [temperatureData, setTemperatureData] = useState({
    role: "user",
    content: "",
  });
  const [heartRateData, setHeartRateData] = useState({
    role: "user",
    content: "",
  });
  const [respiratoryData, setRespiratoryData] = useState({
    role: "user",
    content: "",
  });
  const [oxygenData, setOxygenData] = useState({
    role: "user",
    content: "",
  });

  const [waistData, setWaistData] = useState({
    role: "user",
    content: "",
  });

  const [hipData, setHipData] = useState({
    role: "user",
    content: "",
  });

  const [systolicData, setSystolicData] = useState({
    role: "user",
    content: "",
  });

  const [diAstolicData, setDiastolicData] = useState({
    role: "user",
    content: "",
  });

  const [albuminData, setAlbuminData] = useState({
    role: "user",
    content: "",
  });

  const [altData, setAltData] = useState({
    role: "user",
    content: "",
  });

  const [astData, setAstData] = useState({
    role: "user",
    content: "",
  });
  const [bunData, setBunData] = useState({
    role: "user",
    content: "",
  });

  const [calciumData, setCalciumData] = useState({
    role: "user",
    content: "",
  });
  const [creatineData, setCreatineData] = useState({
    role: "user",
    content: "",
  });
  const [glucoseData, setGlucoseData] = useState({
    role: "user",
    content: "",
  });
  const [hbaData, setHbaData] = useState({
    role: "user",
    content: "",
  });
  const [potassiumData, setPotassiumData] = useState({
    role: "user",
    content: "",
  });
  const [sodiumData, setSodiumData] = useState({
    role: "user",
    content: "",
  });
  const [trigData, setTrigData] = useState({
    role: "user",
    content: "",
  });
  const [ldlData, setLdlData] = useState({
    role: "user",
    content: "",
  });
  const [hdlData, setHdlData] = useState({
    role: "user",
    content: "",
  });

  const [egfrData, setEgfrData] = useState({
    role: "user",
    content: "",
  });

  //gpt credential usestate for frontend start from here
  const [ages, setAges] = useState(
    localStorage.getItem("age") ? JSON.parse(localStorage.getItem("age")) : ""
  );
  const [weight, setWeight] = useState(
    localStorage.getItem("weight")
      ? JSON.parse(localStorage.getItem("weight"))
      : ""
  );
  const [heights, setHeight] = useState(
    localStorage.getItem("height")
      ? JSON.parse(localStorage.getItem("height"))
      : ""
  );
  const [heightsInc, setHeightInc] = useState(
    localStorage.getItem("inc") ? JSON.parse(localStorage.getItem("inc")) : ""
  );
  const [symtoms, setSytoms] = useState(
    localStorage.getItem("sysmtoms")
      ? JSON.parse(localStorage.getItem("sysmtoms"))
      : []
  );
  const [allergies, setAllergies] = useState(
    localStorage.getItem("allergies")
      ? JSON.parse(localStorage.getItem("allergies"))
      : []
  );
  const [medication, setMedication] = useState(
    localStorage.getItem("medication")
      ? JSON.parse(localStorage.getItem("medication"))
      : []
  );
  const [temperature, setTemperature] = useState(
    localStorage.getItem("temperature")
      ? JSON.parse(localStorage.getItem("temperature"))
      : ""
  );
  const [heartRate, setHeartRate] = useState(
    localStorage.getItem("heartrate")
      ? JSON.parse(localStorage.getItem("heartrate"))
      : ""
  );
  const [respiratory, setRespiratory] = useState(
    localStorage.getItem("respiratory")
      ? JSON.parse(localStorage.getItem("respiratory"))
      : ""
  );
  const [oxygen, setOxygen] = useState(
    localStorage.getItem("oxygen")
      ? JSON.parse(localStorage.getItem("oxygen"))
      : ""
  );
  const [waist, setWaist] = useState(
    localStorage.getItem("waist")
      ? JSON.parse(localStorage.getItem("waist"))
      : ""
  );
  const [hip, setHip] = useState(
    localStorage.getItem("hip") ? JSON.parse(localStorage.getItem("hip")) : ""
  );
  const [systolic, setSystolic] = useState(
    localStorage.getItem("systolic")
      ? JSON.parse(localStorage.getItem("systolic"))
      : ""
  );
  const [diastolic, setDiastolic] = useState(
    localStorage.getItem("diastolic")
      ? JSON.parse(localStorage.getItem("diastolic"))
      : ""
  );
  const [albumin, setAlbumin] = useState(
    localStorage.getItem("albumin")
      ? JSON.parse(localStorage.getItem("albumin"))
      : ""
  );
  const [alt, setAlt] = useState(
    localStorage.getItem("alt") ? JSON.parse(localStorage.getItem("alt")) : ""
  );
  const [ast, setAst] = useState(
    localStorage.getItem("ast") ? JSON.parse(localStorage.getItem("ast")) : ""
  );
  const [bun, setBun] = useState(
    localStorage.getItem("bun") ? JSON.parse(localStorage.getItem("bun")) : ""
  );
  const [calcium, setCalcium] = useState(
    localStorage.getItem("calcium")
      ? JSON.parse(localStorage.getItem("calcium"))
      : ""
  );
  const [creatine, setCreatine] = useState(
    localStorage.getItem("creatine")
      ? JSON.parse(localStorage.getItem("creatine"))
      : ""
  );
  const [glucose, setGlucose] = useState(
    localStorage.getItem("glucose")
      ? JSON.parse(localStorage.getItem("glucose"))
      : ""
  );
  const [hba, setHba] = useState(
    localStorage.getItem("hba") ? JSON.parse(localStorage.getItem("hba")) : ""
  );
  const [potassium, setPotassium] = useState(
    localStorage.getItem("potassium")
      ? JSON.parse(localStorage.getItem("potassium"))
      : ""
  );
  const [sodium, setSodium] = useState(
    localStorage.getItem("sodium")
      ? JSON.parse(localStorage.getItem("sodium"))
      : ""
  );
  const [trig, setTrig] = useState(
    localStorage.getItem("trig") ? JSON.parse(localStorage.getItem("trig")) : ""
  );
  const [ldl, setLdl] = useState(
    localStorage.getItem("ldl") ? JSON.parse(localStorage.getItem("ldl")) : ""
  );
  const [hdl, setHdl] = useState(
    localStorage.getItem("hdl") ? JSON.parse(localStorage.getItem("hdl")) : ""
  );
  const [egfr, setEgfr] = useState(
    localStorage.getItem("egfr") ? JSON.parse(localStorage.getItem("egfr")) : ""
  );

  //gpt credential usestate

  // const [drop, setDrop] = useState([
  //   { name: "12 Hour Allergy and congestion", id: 1 },
  //   { name: "12 Hour Allergy d", id: 2 },
  //   { name: "12 Hour Mucus Relief", id: 3 },
  //   { name: "12 Hour Nasal Decongestant", id: 4 },
  //   { name: "12 Hour Mucus Relief Nasal", id: 5 },
  //   { name: "Hour Allergy", id: 6 },
  //   { name: "8Hr Arthritis Pain", id: 6 },
  //   { name: "8Hr Arthritis Relief", id: 7 },
  //   { name: "Equate 8Hr Arthritis Pain Relief", id: 8 },
  // ]);

  const { user } = useSelector((state) => state.auth);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    //console.log(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // const sendData = {
    //   message: value,
    // };

    const sendData = {
      message: value,
      messages: gptData,
      ageData,
      weightData,
      heightData,
      sysmtomsData,
      allergiesData,
      medicationData,
      temperatureData,
      heartRateData,
      respiratoryData,
      oxygenData,
      waistData,
      hipData,
      systolicData,
      diAstolicData,
      albuminData,
      altData,
      astData,
      bunData,
      calciumData,
      creatineData,
      glucoseData,
      hbaData,
      potassiumData,
      sodiumData,
      trigData,
      ldlData,
      hdlData,
      egfrData,
    };

    setIsLoading(true);
    setStore((store) => [...store, { user: value }, { gpt: "" }]);
    setValue("");

    setTimeout(async () => {
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/gpt",
          sendData,
          {
            headers: {
              Authorization: "Bearer " + user.token,
            },
          }
        );

        const dbData = {
          gpt: data.result.choices[0].message.content,
          user: value,
          userId: user.id,
        };

        //for db request
        await axios.post(process.env.REACT_APP_SERVER_URL + "/message", dbData);

        setIsLoading(false);
        setMessage(data.result.choices[0].message.content);
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  };

  useEffect(() => {
    if (message) {
      setStore((store) => [...store, { user: "" }, { gpt: message }]);
    }

    //test
    const fetchData = async () => {
      const sendData = {
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/gpts",
          sendData
        );

        const renderData = data.result.map((item) =>
          item.userId == user.id
            ? {
                role: "user",
                content: item.user,
              }
            : []
        );
        setGptData(renderData);
      } catch (err) {
        console.log(err);
      }
      //extra get start from here

      //1 gor get age
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getage",
          sendData
        );

        setAgeData({
          role: "user",
          content: data.result.age,
        });
      } catch (err) {
        console.log(err);
      }
      //2 gor get weight
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getweight",
          sendData
        );

        setWeightData({
          role: "user",
          content: data.result.weight,
        });
      } catch (err) {
        console.log(err);
      }

      //3 gor get aheight
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getheight",
          sendData
        );

        setHeightData({
          role: "user",
          content: data.result.height,
        });
      } catch (err) {
        console.log(err);
      }

      //4 gor get systoms array
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getsymtoms",
          sendData
        );

        const renderData = data.result.symtoms.map((item) => ({
          role: "user",
          content: item,
        }));
        setSysmtomsData(renderData);
      } catch (err) {
        console.log(err);
      }

      //5 gor get alliergies array
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getallergies",
          sendData
        );

        const renderData = data.result.allergies.map((item) => ({
          role: "user",
          content: item,
        }));
        setAllergiesData(renderData);
      } catch (err) {
        console.log(err);
      }

      //6 gor get medication array
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getmedication",
          sendData
        );

        const renderData = data.result.medication.map((item) => ({
          role: "user",
          content: item,
        }));
        setMedicationData(renderData);
      } catch (err) {
        console.log(err);
      }

      //7 temperature get
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/gettemperature",
          sendData
        );

        setTemperatureData({
          role: "user",
          content: data.result.temperature,
        });
      } catch (err) {
        console.log(err);
      }

      //8 heartrate get
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getheartrate",
          sendData
        );

        setHeartRateData({
          role: "user",
          content: data.result.heartrate,
        });
      } catch (err) {
        console.log(err);
      }

      //8 respiratory get
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getrespiratory",
          sendData
        );

        setRespiratoryData({
          role: "user",
          content: data.result.respiratory,
        });
      } catch (err) {
        console.log(err);
      }

      //9 oxygen get
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getoxygen",
          sendData
        );

        setOxygenData({
          role: "user",
          content: data.result.oxygen,
        });
      } catch (err) {
        console.log(err);
      }

      //10 waist circumstance get
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getwaist",
          sendData
        );

        setWaistData({
          role: "user",
          content: data.result.waist,
        });
      } catch (err) {
        console.log(err);
      }

      //11 hip circumstance get
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/gethip",
          sendData
        );

        setHipData({
          role: "user",
          content: data.result.hip,
        });
      } catch (err) {
        console.log(err);
      }

      //11 systolic circumstance get
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getdiastolic",
          sendData
        );

        setDiastolicData({
          role: "user",
          content: data.result.diastolic,
        });
      } catch (err) {
        console.log(err);
      }

      //11 dyastolic circumstance get
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getsystolic",
          sendData
        );

        setSystolicData({
          role: "user",
          content: data.result.systolic,
        });
      } catch (err) {
        console.log(err);
      }

      //12 albumin
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getalbumin",
          sendData
        );

        setAlbuminData({
          role: "user",
          content: data.result.albumin,
        });
      } catch (err) {
        console.log(err);
      }

      //13 alt
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getalt",
          sendData
        );

        setAltData({
          role: "user",
          content: data.result.alt,
        });
      } catch (err) {
        console.log(err);
      }

      //13 ast
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getast",
          sendData
        );

        setAstData({
          role: "user",
          content: data.result.ast,
        });
      } catch (err) {
        console.log(err);
      }

      //14 bun
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getbun",
          sendData
        );

        setBunData({
          role: "user",
          content: data.result.bun,
        });
      } catch (err) {
        console.log(err);
      }
      //15 calcium
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getcalcium",
          sendData
        );

        setCalciumData({
          role: "user",
          content: data.result.calcium,
        });
      } catch (err) {
        console.log(err);
      }
      //15 creatine
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getcreatine",
          sendData
        );

        setCreatineData({
          role: "user",
          content: data.result.creatine,
        });
      } catch (err) {
        console.log(err);
      }
      //16 glucose
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getglucose",
          sendData
        );

        setGlucoseData({
          role: "user",
          content: data.result.glucose,
        });
      } catch (err) {
        console.log(err);
      }

      //16 hba
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/gethba",
          sendData
        );

        setHbaData({
          role: "user",
          content: data.result.hba,
        });
      } catch (err) {
        console.log(err);
      }
      //16 potassium
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getpotassium",
          sendData
        );

        setPotassiumData({
          role: "user",
          content: data.result.potassium,
        });
      } catch (err) {
        console.log(err);
      }

      //16 sodium
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getsodium",
          sendData
        );

        setSodiumData({
          role: "user",
          content: data.result.sodium,
        });
      } catch (err) {
        console.log(err);
      }
      //17 trig
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/gettrig",
          sendData
        );

        setTrigData({
          role: "user",
          content: data.result.trig,
        });
      } catch (err) {
        console.log(err);
      }
      //18 ldl
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getldl",
          sendData
        );

        setLdlData({
          role: "user",
          content: data.result.ldl,
        });
      } catch (err) {
        console.log(err);
      }
      //18 hdl
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/gethdl",
          sendData
        );

        setHdlData({
          role: "user",
          content: data.result.hdl,
        });
      } catch (err) {
        console.log(err);
      }

      //19 egfr
      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/getegfr",
          sendData
        );

        setEgfrData({
          role: "user",
          content: data.result.egfr,
        });
      } catch (err) {
        console.log(err);
      }

      //extra get start from here
    };
    fetchData();
    //tst
  }, [message]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        userId: user.id,
      };

      setMsgLoader(true);

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/gpts",
          sendData
        );
        //extra for api

        //extra for api

        setStore(data.result);
        setMsgLoader(false);
      } catch (err) {
        console.log(err);
      }
    };

    const userId = localStorage.getItem("userId")
      ? JSON.parse(localStorage.getItem("userId"))
      : null;

    if (!userId) {
      localStorage.setItem("userId", JSON.stringify(uuidv4()));
    } else {
      setUserId(userId);
      fetchData();
    }
  }, []);

  //age extra start

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        age: "My age is " + ages,
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/age",
          sendData
        );

        setAgeData({
          role: "user",
          content: data.result.age,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("age", JSON.stringify(ages));
    };

    const timerId = setTimeout(() => {
      if (ages) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [ages]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        weight: "My weight is " + weight + " pounds",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/weight",
          sendData
        );

        setWeightData({
          role: "user",
          content: data.result.weight,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("weight", JSON.stringify(weight));
    };

    const timerId = setTimeout(() => {
      if (weight) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [weight]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        height: "My height is " + heights + " feet " + heightsInc + " inc",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/height",
          sendData
        );

        setHeightData({
          role: "user",
          content: data.result.height,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("height", JSON.stringify(heights));
      localStorage.setItem("inc", JSON.stringify(heightsInc));
    };

    const timerId = setTimeout(() => {
      if (heights && heightsInc) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [heights, heightsInc]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        symtoms: "My sysmtoms are " + symtoms,
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/symtoms",
          sendData
        );

        if (data.result.userId == user.id) {
          const renderData = data.result.symtoms.map((item) => ({
            role: "user",
            content: item,
          }));
          setSysmtomsData(renderData);
        } else {
          setSysmtomsData([]);
        }
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("sysmtoms", JSON.stringify(symtoms));
    };

    const timerId = setTimeout(() => {
      if (symtoms.length > 0) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [symtoms]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        allergies: "I have allergies like " + allergies,
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/allergies",
          sendData
        );

        if (data.result.userId == user.id) {
          const renderData = data.result.allergies.map((item) => ({
            role: "user",
            content: item,
          }));
          setAllergiesData(renderData);
        } else {
          setAllergiesData([]);
        }
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("allergies", JSON.stringify(allergies));
    };

    const timerId = setTimeout(() => {
      if (allergies.length > 0) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [allergies]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        medication: "I have some medications like " + medication,
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/medication",
          sendData
        );

        if (data.result.userId == user.id) {
          const renderData = data.result.medication.map((item) => ({
            role: "user",
            content: item,
          }));
          setMedicationData(renderData);
        } else {
          setMedicationData([]);
        }
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("medication", JSON.stringify(medication));
    };

    const timerId = setTimeout(() => {
      if (medication.length > 0) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [medication]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        temperature:
          "My body temperature is " + temperature + " degree ferhanite",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/temperature",
          sendData
        );

        setTemperatureData({
          role: "user",
          content: data.result.temperature,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("temperature", JSON.stringify(temperature));
    };

    const timerId = setTimeout(() => {
      if (temperature) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [temperature]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        heartrate: "My heart rate is " + heartRate + " BPM",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/heartrate",
          sendData
        );

        setHeartRateData({
          role: "user",
          content: data.result.heartrate,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("heartrate", JSON.stringify(heartRate));
    };

    const timerId = setTimeout(() => {
      if (heartRate) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [heartRate]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        respiratory:
          "My respiratory rate is " + respiratory + " breaths per minutes",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/respiratory",
          sendData
        );

        setRespiratoryData({
          role: "user",
          content: data.result.respiratory,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("respiratory", JSON.stringify(respiratory));
    };

    const timerId = setTimeout(() => {
      if (respiratory) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [respiratory]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        oxygen: "My oxygen saturation is " + oxygen + " %",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/oxygen",
          sendData
        );

        setOxygenData({
          role: "user",
          content: data.result.oxygen,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("oxygen", JSON.stringify(oxygen));
    };

    const timerId = setTimeout(() => {
      if (oxygen) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [oxygen]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        waist: "My waist circumference is " + waist + "  inches",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/waist",
          sendData
        );

        setWaistData({
          role: "user",
          content: data.result.waist,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("waist", JSON.stringify(waist));
    };

    const timerId = setTimeout(() => {
      if (waist) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [waist]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        hip: "My hip circumference is " + hip + "  inches",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/hip",
          sendData
        );

        setHipData({
          role: "user",
          content: data.result.hip,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("hip", JSON.stringify(hip));
    };

    const timerId = setTimeout(() => {
      if (hip) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [hip]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        systolic: "My Systolic Blood Pressure is " + systolic + "  mmHg",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/systolic",
          sendData
        );

        setSystolicData({
          role: "user",
          content: data.result.systolic,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("systolic", JSON.stringify(systolic));
    };

    const timerId = setTimeout(() => {
      if (systolic) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [systolic]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        diastolic: "My Diastolic Blood Pressure is " + diastolic + "  mmHg",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/diastolic",
          sendData
        );

        setDiastolicData({
          role: "user",
          content: data.result.diastolic,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("diastolic", JSON.stringify(diastolic));
    };

    const timerId = setTimeout(() => {
      if (diastolic) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [diastolic]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        albumin: "My Albumin lab test result is " + albumin + "  g/dL",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/albumin",
          sendData
        );

        setAlbuminData({
          role: "user",
          content: data.result.albumin,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("albumin", JSON.stringify(albumin));
    };

    const timerId = setTimeout(() => {
      if (albumin) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [albumin]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        alt:
          "My amount of alt in the blood from lab test result is " +
          alt +
          "  U/L",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/alt",
          sendData
        );

        setAltData({
          role: "user",
          content: data.result.alt,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("alt", JSON.stringify(alt));
    };

    const timerId = setTimeout(() => {
      if (alt) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [alt]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        ast: "My ast lab test result is " + ast + "  U/L",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/ast",
          sendData
        );

        setAstData({
          role: "user",
          content: data.result.ast,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("ast", JSON.stringify(ast));
    };

    const timerId = setTimeout(() => {
      if (ast) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [ast]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        bun: "My bun lab test result is " + bun + "  mg/dL",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/bun",
          sendData
        );

        setBunData({
          role: "user",
          content: data.result.bun,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("bun", JSON.stringify(bun));
    };

    const timerId = setTimeout(() => {
      if (bun) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [bun]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        calcium: "My calcium is " + calcium + " from lab test result",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/calcium",
          sendData
        );

        setCalciumData({
          role: "user",
          content: data.result.calcium,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("calcium", JSON.stringify(calcium));
    };

    const timerId = setTimeout(() => {
      if (calcium) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [calcium]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        creatine: "My creatinine lab test result is " + creatine + " mg/dL",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/creatine",
          sendData
        );

        setCreatineData({
          role: "user",
          content: data.result.creatine,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("creatine", JSON.stringify(creatine));
    };

    const timerId = setTimeout(() => {
      if (creatine) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [creatine]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        glucose: "My glucose lab test result is " + glucose + " mg/dL",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/glucose",
          sendData
        );

        setGlucoseData({
          role: "user",
          content: data.result.glucose,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("glucose", JSON.stringify(glucose));
    };

    const timerId = setTimeout(() => {
      if (glucose) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [glucose]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        hba: "My hba1c level from lab test result is " + hba + " mmol/ml",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/hba",
          sendData
        );

        setHbaData({
          role: "user",
          content: data.result.hba,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("hba", JSON.stringify(hba));
    };

    const timerId = setTimeout(() => {
      if (hba) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [hba]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        potassium: "My potassium lab test result is " + potassium + " mEq/L",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/potassium",
          sendData
        );

        setPotassiumData({
          role: "user",
          content: data.result.potassium,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("potassium", JSON.stringify(potassium));
    };

    const timerId = setTimeout(() => {
      if (potassium) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [potassium]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        sodium: "My sodium lab test result is " + sodium + " mEq/L",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/sodium",
          sendData
        );

        setSodiumData({
          role: "user",
          content: data.result.sodium,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("sodium", JSON.stringify(sodium));
    };

    const timerId = setTimeout(() => {
      if (sodium) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [sodium]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        trig: "My triglycerides lab test result is " + trig + " mg/dL",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/trig",
          sendData
        );

        setTrigData({
          role: "user",
          content: data.result.trig,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("trig", JSON.stringify(trig));
    };

    const timerId = setTimeout(() => {
      if (trig) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [trig]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        ldl:
          "My LDL cholesterol level from lab test result is " + ldl + " mg/dL",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/ldl",
          sendData
        );

        setLdlData({
          role: "user",
          content: data.result.ldl,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("ldl", JSON.stringify(ldl));
    };

    const timerId = setTimeout(() => {
      if (ldl) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [ldl]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        hdl:
          "My HDL cholesterol level from lab test result is " + hdl + " mg/dL",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/hdl",
          sendData
        );

        setHdlData({
          role: "user",
          content: data.result.hdl,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("hdl", JSON.stringify(hdl));
    };

    const timerId = setTimeout(() => {
      if (hdl) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [hdl]);

  useEffect(() => {
    const fetchData = async () => {
      const sendData = {
        egfr: "My eGFR lab test result is " + egfr + " mL/min/1.73m2",
        userId: user.id,
      };

      try {
        const { data } = await axios.post(
          process.env.REACT_APP_SERVER_URL + "/egfr",
          sendData
        );

        setEgfrData({
          role: "user",
          content: data.result.egfr,
        });
      } catch (err) {
        console.log(err);
      }
      localStorage.setItem("egfr", JSON.stringify(egfr));
    };

    const timerId = setTimeout(() => {
      if (egfr) {
        fetchData();
      }
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [egfr]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [store, isLoading]);

  return (
    <>
      {msgLoader ? (
        <Loaders />
      ) : (
        <div className="c-containers">
          <Row className="chat">
            <Col xs={12} sm={12} md={6} lg={7}>
              <div className="chat-left">
                {/* chat */}
                <div className="text mt-2">
                  <>
                    <div className="sender">
                      <div className="ellepse">
                        {" "}
                        <img
                          className="msg-logo"
                          src="/assests/b.png"
                          alt=""
                        />{" "}
                      </div>
                      <div className="message">
                        <p>Hello there! I'm Dr. Mega.</p>
                        <div className="shape"></div>
                      </div>
                    </div>
                    <div className="sender">
                      <div className="ellepse">
                        {" "}
                        <img
                          className="msg-logo"
                          src="/assests/b.png"
                          alt=""
                        />{" "}
                      </div>
                      <div className="message">
                        <p>How can I help?</p>
                        <div className="shape"></div>
                      </div>
                    </div>
                  </>
                  {store.map((item, index) => (
                    <div ref={scrollRef} key={index}>
                      {item.user && (
                        <div className="sender own">
                          <div className="ellepse">
                            <PersonIcon />
                          </div>
                          <div className="message">
                            <p>{item.user}</p>
                            <div className="shapes"></div>
                          </div>
                        </div>
                      )}
                      {item.gpt && (
                        <>
                          <div className="sender">
                            <div className="ellepse">
                              {" "}
                              <img
                                className="msg-logo"
                                src="/assests/b.png"
                                alt=""
                              />{" "}
                            </div>
                            <div className="message">
                              <p>{item.gpt}</p>
                              <div className="shape"></div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div ref={scrollRef} className="sender">
                      <div className="ellepse">
                        {" "}
                        <img
                          className="msg-logo"
                          src="/assests/b.png"
                          alt=""
                        />{" "}
                      </div>
                      <div className="message">
                        <p className="loading"></p>
                        <div className="shape"></div>
                      </div>
                    </div>
                  )}

                  {/* chat end */}
                </div>
                <form onSubmit={onSubmitHandler} className="input-text">
                  <Form.Control
                    value={value}
                    onChange={onChangeHandler}
                    className="b-input"
                    type="text"
                    placeholder="Send a message"
                  />
                  <button type="submit">
                    <span> Send</span>
                    <span>
                      <img
                        style={{ width: "15px", marginBottom: "2px" }}
                        className="btn-image"
                        src="/assests/send.png"
                        alt=""
                      />
                    </span>
                  </button>
                </form>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={5} className="chat-right">
              <Row className="mt-3">
                <Col md={12} className="top">
                  <h3>
                    <MedicalServicesIcon
                      style={{ color: "#1976D2", fontSize: "28px" }}
                    />{" "}
                    Medical Information
                  </h3>
                  <p>
                    Provide your medical information for more personalized and
                    informative suggestions.
                  </p>
                  <div className="btns2">
                    <button> IMPERIAL</button>
                    <button disabled>METRICS(SI)</button>
                  </div>
                </Col>
              </Row>

              <div className="core">
                <h3>
                  <span>
                    <img
                      style={{ width: "20px" }}
                      src="/assests/circle.png"
                      alt=""
                    />
                  </span>
                  <span> Core</span>
                </h3>
                <div className="mt-4 top-input">
                  <div className="input-items">
                    <div className="form-group">
                      <label>Age</label>
                      <input
                        onChange={(e) => setAges(e.target.value)}
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Your age"
                        type="number"
                        value={ages}
                        min={0}
                        className="form-control"
                      />
                      <span className="year">yr</span>
                    </div>

                    <div className="form-group">
                      <label>Weight</label>
                      <input
                        onChange={(e) => setWeight(e.target.value)}
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Weight"
                        min={0}
                        value={weight}
                        type="number"
                        className="form-control"
                      />
                      <span className="year">Ib</span>
                    </div>
                  </div>

                  {/* second */}
                  <div className="input-items">
                    <div className="d-flex gap-2">
                      <div className="form-groups">
                        <label>Height</label>
                        <input
                          onChange={(e) => setHeight(e.target.value)}
                          value={heights}
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="years">ft</span>
                      </div>
                      <div className="form-groups">
                        <label></label>
                        <input
                          onChange={(e) => setHeightInc(e.target.value)}
                          min={0}
                          type="number"
                          className="form-control"
                          value={heightsInc}
                        />
                        <span className="years">in</span>
                      </div>
                    </div>
                    <div className="form-groupss">
                      <div>
                        <FloatingLabel
                          style={{ color: "gray" }}
                          controlId="floatingInput"
                        >
                          <MultipleValueTextInput
                            values={symtoms}
                            onItemAdded={(item, allItems) =>
                              setSytoms(allItems)
                            }
                            // onItemDeleted={(item, allItems) =>
                            //   console.log(item)
                            // }
                            name="item-input"
                            className="random"
                            placeholder="Symtoms"
                          />
                        </FloatingLabel>
                      </div>
                    </div>
                    {/* <div className="form-groupss">
                  <label>Diastolic Blood Pressure</label>

                  <MultipleValueTextInput
                    onItemAdded={(item, allItems) => console.log(item)}
                    onItemDeleted={(item, allItems) => console.log(item)}
                    name="item-input"
                    className="random"
                    placeholder="name@example.com"
                  />
                  <span className="year">mmHg</span>
                </div> */}
                  </div>
                  {/* second */}

                  <div className="input-items">
                    {/* <div className="form-groupss">
                  <div className="text2">
                    <FloatingLabel
                      style={{ color: "gray" }}
                      controlId="floatingInput"
                      label="Allergies"
                      className="mb-3"
                    >
                      <Form.Control
                        ref={allergiesRef}
                        data-toggle="tooltip"
                        data-placement="left"
                        title="alargies you have"
                        className="ctn"
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </div>
                </div> */}

                    <div className="form-groupss">
                      <div>
                        <FloatingLabel
                          style={{ color: "gray" }}
                          controlId="floatingInput"
                        >
                          <MultipleValueTextInput
                            values={allergies}
                            onItemAdded={(item, allItems) =>
                              setAllergies(allItems)
                            }
                            // onItemDeleted={(item, allItems) =>
                            //   console.log(item)
                            // }
                            name="item-input"
                            className="random ps-2"
                            placeholder="Allergies"
                          />
                        </FloatingLabel>
                      </div>
                    </div>

                    {/* <div className="form-groupss">
                  <label>Diastolic Blood Pressure</label>

                  <MultipleValueTextInput
                    onItemAdded={(item, allItems) => console.log(item)}
                    onItemDeleted={(item, allItems) => console.log(item)}
                    name="item-input"
                    className="random"
                  />
                  <span className="year">mmHg</span>
                </div> */}
                    <div className="form-groupss">
                      <div>
                        <FloatingLabel
                          style={{ color: "gray" }}
                          controlId="floatingInput"
                        >
                          <MultipleValueTextInput
                            values={medication}
                            onItemAdded={(item, allItems) =>
                              setMedication(allItems)
                            }
                            // onItemDeleted={(item, allItems) =>
                            //   console.log(item)
                            // }
                            name="item-input"
                            className="random ps-2"
                            placeholder="Medications"
                          />
                        </FloatingLabel>
                      </div>
                    </div>
                    {/* <div className="form-groupss">
                      <div>
                        <FloatingLabel
                          style={{ color: "gray" }}
                          controlId="floatingInput"
                        >
                          <Multiselect
                            options={drop} // Options to display in the dropdown
                            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                            onSelect={(data) => setMedication(data)} // Function will trigger on select event
                            // onRemove={this.onRemove} // Function will trigger on remove event
                            displayValue="name" // Property name to display in the dropdown options
                            className="tt"
                          />
                        </FloatingLabel>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* vital start */}
              <div className="mt-3">
                <div className="vitals">
                  <h3 className="d-flex align-items-center gap-3">
                    <span>
                      <img
                        style={{ width: "26px" }}
                        src="/assests/vital.png"
                        alt=""
                      />
                    </span>{" "}
                    <span className="v-text">Vitals</span>{" "}
                  </h3>

                  <div className="top-input">
                    <div className="input-items mt-3">
                      <div className="form-group">
                        <label>Temperature</label>
                        <input
                          value={temperature}
                          onChange={(e) => setTemperature(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Temperature in Fahrenheit. Normal body temperature is 98.6°F (37°C)."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year">°F</span>
                      </div>

                      <div className="form-group3">
                        <label>Heart Rate</label>
                        <input
                          value={heartRate}
                          onChange={(e) => setHeartRate(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Heart Rate is the number of times your heart beats
                       per minute. A normal resting heart rate for adults is 
                       between 60 and 100 beats per minute."
                          min={0}
                          type="number"
                          className="form-control"
                        />
                        <span className="year">BPM</span>
                      </div>
                    </div>

                    <div className="input-items">
                      <div className="form-groupres">
                        <label>Response Rate</label>
                        <input
                          value={respiratory}
                          onChange={(e) => setRespiratory(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Respiratory Rate is the number of breaths you take per
                       minute. A normal respiratory rate for adults is between 12
                       and 16 to 20 breaths per minute."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year">breaths per minutes</span>
                      </div>

                      <div
                        className="form-group
                "
                      >
                        <label>Oxygen Saturation</label>
                        <input
                          value={oxygen}
                          onChange={(e) => setOxygen(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Oxygen Saturation: fraction of oxygen-saturated hemoglobin
                       relative to total hemoglobin in the blood. Normal oxygen 
                       saturation is 95% to 100%."
                          min={0}
                          type="number"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="input-items">
                      <div className="form-group">
                        <label>Waist Circumference</label>
                        <input
                          value={waist}
                          onChange={(e) => setWaist(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Waist Circumference is the measurement around the 
                      narrowest part of the waist. It is used to determine if
                       a person has a healthy weight."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year">in</span>
                      </div>

                      <div className="form-group">
                        <label>Hip Circumference</label>
                        <input
                          value={hip}
                          onChange={(e) => setHip(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Hip Circumference is the measurement around the widest
                       part of the hips. It is used to determine if a person has a healthy weight"
                          min={0}
                          type="number"
                          className="form-control"
                        />
                        <span className="year">in</span>
                      </div>
                    </div>

                    <div className="input-items">
                      <div className="form-groupresb">
                        <label>Systolic Blood Pressure</label>
                        <input
                          value={systolic}
                          onChange={(e) => setSystolic(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Systolic Blood Pressure is the top number in a blood pressure
                       reading. It measures the pressure in your arteries when your heart beats.
                        Normal systolic blood pressure is less than 120 mm Hg."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year">mmHg</span>
                      </div>

                      <div className="form-groupresb">
                        <label>Diastolic Blood Pressure</label>
                        <input
                          value={diastolic}
                          onChange={(e) => setDiastolic(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Diastolic Blood Pressure is the bottom number in a blood
                       pressure reading. It measures the pressure in your arteries when
                        your heart rests between beats. Normal diastolic blood pressure is less than 80 mm Hg."
                          min={0}
                          type="number"
                          className="form-control"
                        />

                        <span className="year">mmHg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* vital end */}

              {/* lav start */}

              <div className="mt-5">
                <div className="vitals">
                  <h3 className="d-flex align-items-center gap-2">
                    <span>
                      <img
                        style={{ width: "26px" }}
                        src="/assests/d.png"
                        alt=""
                      />
                    </span>{" "}
                    <span className="v-text">Lab Test Results</span>{" "}
                  </h3>

                  <div className="top-input mt-3 mb-5">
                    <div className="input-items mt-3">
                      <div className="form-group3">
                        <label>Albumin</label>
                        <input
                          value={albumin}
                          onChange={(e) => setAlbumin(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Albumin is a protein made by the liver. It helps keep fluid in
                       the blood vessels. Low albumin levels may be a sign of liver disease,
                        malnutrition, or other conditions. The normal range is 3.4 to 5.4 g/dL."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year">g/dL</span>
                      </div>

                      <div className="form-group3">
                        <label>ALT</label>
                        <input
                          value={alt}
                          onChange={(e) => setAlt(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="An alanine transaminase (ALT) blood test measures the
                       amount of ALT in your blood. ALT levels in your blood can 
                       increase when your liver is damaged. The normal range is 7 
                       to 56 U/L."
                          min={0}
                          type="number"
                          className="form-control"
                        />
                        <span className="year">U/L</span>
                      </div>
                    </div>

                    <div className="input-items">
                      <div className="form-group3">
                        <label>AST</label>
                        <input
                          value={ast}
                          onChange={(e) => setAst(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="An aspartate transaminase (AST) blood test measures the 
                      amount of AST in your blood. AST levels in your blood can increase
                       when your liver is damaged. The normal range is 13 to 39 U/L."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year">U/L</span>
                      </div>

                      <div className="form-group4">
                        <label>BUN</label>
                        <input
                          value={bun}
                          onChange={(e) => setBun(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="A blood urea nitrogen (BUN) test reveals important
                       information about how well your kidneys are working. A normal
                        range is 7 to 20 mg/dL or 25 mg/dL."
                          min={0}
                          type="number"
                          className="form-control"
                        />
                        <span className="year">mg/dL</span>
                      </div>
                    </div>

                    <div className="input-items">
                      <div className="form-group">
                        <label>Calcium</label>
                        <input
                          value={calcium}
                          onChange={(e) => setCalcium(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Calcium is a mineral that is important for building strong
                       bones and teeth. A normal range is 8.5 to 10.5 mg/dL."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year"></span>
                      </div>

                      <div className="form-group4">
                        <label>Creatinine</label>
                        <input
                          value={creatine}
                          onChange={(e) => setCreatine(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="A creatinine test is a measure of how well your kidneys are
                       performing their job of filtering waste from your blood. A normal
                        range is 0.7 to 1.3 mg/dL."
                          min={0}
                          type="number"
                          className="form-control"
                        />
                        <span className="year">mg/dL</span>
                      </div>
                    </div>

                    <div className="input-items">
                      <div className="form-group4">
                        <label>Glucose</label>
                        <input
                          value={glucose}
                          onChange={(e) => setGlucose(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="The serum glucose test measures the amount of glucose in
                       your blood. Glucose is a type of sugar that your body uses for
                        energy. A normal range is 70 to 105 mg/dL. A fasting blood 
                        sugar level of 100 mg/dL or higher is considered a sign of diabetes."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year">mg/dL</span>
                      </div>

                      <div className="form-group5">
                        <label>HbA1c</label>
                        <input
                          value={hba}
                          onChange={(e) => setHba(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Hemoglobin A1C is a blood test that shows your average
                       blood sugar level for the past 2 to 3 months. A normal range
                        is 4.0 to 5.6 percent."
                          min={0}
                          type="number"
                          name="form-control"
                        />
                        <span className="year">mmol/mol</span>
                      </div>
                    </div>

                    <div className="input-items">
                      <div className="form-group4">
                        <label>Potassium</label>
                        <input
                          value={potassium}
                          onChange={(e) => setPotassium(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Potassium is an electrolyte that helps your muscles work
                       properly. A normal range is 3.5 to 5.0 mEq/L."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year">mEq/L</span>
                      </div>

                      <div className="form-group4">
                        <label>Sodium</label>
                        <input
                          value={sodium}
                          onChange={(e) => setSodium(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Sodium is an electrolyte that helps your muscles work 
                      properly. A normal range is 135 to 145 mEq/L."
                          min={0}
                          type="number"
                          className="form-control"
                        />
                        <span className="year">mEq/L</span>
                      </div>
                    </div>

                    <div className="input-items">
                      <div className="form-group4">
                        <label>Triglycerides</label>
                        <input
                          value={trig}
                          onChange={(e) => setTrig(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Triglycerides are a type of fat found in your blood.
                       A normal range is 40 to 160 mg/dL."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year">mg/dL</span>
                      </div>

                      <div className="form-group4">
                        <label>LDL</label>
                        <input
                          value={ldl}
                          onChange={(e) => setLdl(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Low-density lipoprotein (LDL) is sometimes called 'bad'
                       cholesterol. A normal range is less than 100 mg/dL."
                          min={0}
                          type="number"
                          className="form-control"
                        />
                        <span className="year">mg/dl</span>
                      </div>
                    </div>

                    <div className="input-items">
                      <div className="form-group4">
                        <label>HDL</label>
                        <input
                          value={hdl}
                          onChange={(e) => setHdl(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="High-density lipoprotein (HDL) is sometimes called 'good'
                       cholesterol. A normal range is 40 to 60 mg/dL."
                          type="number"
                          min={0}
                          className="form-control "
                        />
                        <span className="year">mg/dL</span>
                      </div>

                      <div className="form-group6">
                        <label>eGFR</label>
                        <input
                          value={egfr}
                          onChange={(e) => setEgfr(e.target.value)}
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Estimated Glomerular Filtration Rate (eGFR) is a measure of 
                      how well your kidneys are working. A normal
                       range is 90 to 120 mL/min/1.73m2."
                          min={0}
                          type="number"
                          className="form-control"
                        />
                        <span className="year">mL/min/1.73m2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* lab end */}
              <div className="result"></div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default ChatBox;
