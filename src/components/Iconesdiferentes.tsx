const iconeStyle = {
  height: '48px', // ajuste conforme o tamanho ideal do card
  width: '48px',
  objectFit: 'contain',
  display: 'block',
  margin: 'auto'
};

const Icone1 = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <img src="/amazon_api_logo.png" style={iconeStyle}/>
    </div>
  );
};
const Icone2 = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <img src="/amazon_cloudwatch_logo.png" style={iconeStyle}/>
    </div>
  );
};
const Icone3 = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <img src="/atlassian_jira_logo_icon_170511.png" style={iconeStyle}/>
    </div>
  );
};
const Icone4 = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <img src="/claude_sonnet_logo.png" style={iconeStyle}/>
    </div>
  );
};
const Icone5 = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <img src="/lambda_logo.png" style={iconeStyle}/>
    </div>
  );
};
const Icone6 = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <img src="/jira-1.svg" style={iconeStyle}/>
    </div>
  );
};
export { Icone1, Icone2, Icone3, Icone4, Icone5, Icone6 };
