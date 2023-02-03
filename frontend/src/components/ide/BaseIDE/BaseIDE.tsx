import React from 'react';
import AceEditor from 'react-ace';
import { useColorMode, IconButton } from '@chakra-ui/react';

import 'ace-builds/src-noconflict/mode-JSON';

export const BaseIDE = (props: any) => {
  const startingValue = '"body":{"data":"data goes here"}';
  return (
    <AceEditor
      placeholder='must be in the format of "body":{
        "data":"data goes here"
      }'
      mode='json'
      name='blah2'
      onChange={props.onRequestBodyChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={props.requestValue || startingValue}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default BaseIDE;
