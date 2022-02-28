import * as React from 'react';
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import HeaderContainer from '../../components/Base/HeaderContainer';
import BodyContainer from '../../components/Base/BodyContainer';

const DevDetail = (req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) => {
  return (
    <main>
      <HeaderContainer />
      <BodyContainer>개발 Detail {req.params.id}</BodyContainer>
    </main>
  );
};

export default DevDetail;
