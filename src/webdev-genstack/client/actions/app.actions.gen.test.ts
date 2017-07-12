/*
~!! WARNING !!~
~!! This is an auto-generated file.
~!! All edits will be lost!

../_userProject/defs/app.def.json
    |> tsActionTestWriter
    |> client/actions/app.actions.gen.test.ts

~!! This is an auto-generated file.
~!! All edits will be lost!
~!! WARNING !!~
*/

// TODO make these tests more robust - like with snapshot testing

import * as actions from './app.actions.gen';
import * as rand from '../../../utils/rand';
import * as t from '$USERPROJECT/app.types.gen';

import {is} from '$utils/is';

it('calls the SignUpUserAction creator', () => {
  const action = actions.signUpUser(rand.str());
  is<t.SignUpUserAction>(action);
});

it('calls the SignInUserAction creator', () => {
  const action = actions.signInUser(rand.str(), rand.str());
  is<t.SignInUserAction>(action);
});

it('calls the SignOutUserAction creator', () => {
  const action = actions.signOutUser();
  is<t.SignOutUserAction>(action);
});

it('calls the CreateQueryAction creator', () => {
  const action = actions.createQuery(t.mockQuery());
  is<t.CreateQueryAction>(action);
});

it('calls the ReadQueryAction creator', () => {
  const action = actionst.readQuery();
  is<t.ReadQueryAction>(action);
});

it('calls the UpdateQueryAction creator', () => {
  const action = actions.updateQuery(t.mockId(), t.mockId(), rand.str(), rand.str());
  is<t.UpdateQueryAction>(action);
});

it('calls the DeleteQueryAction creator', () => {
  const action = actions.deleteQuery(t.mockId());
  is<t.DeleteQueryAction>(action);
});

it('calls the ExecuteQueryAction creator', () => {
  const action = t.executeQuery(t.mockId());
  is<t.ExecuteQueryAction>(action);
});

it('calls the ExecuteSuccessQueryAction creator', () => {
  const action = actions.executeSuccessQuery(t.mockId(), rand.str());
  is<t.ExecuteSuccessQueryAction>(action);
});

it('calls the SetActiveQueryAction creator', () => {
  const action = actions.setActiveQuery(t.mockId());
  is<t.SetActiveQueryAction>(action);
});

/*
~!! WARNING !!~
~!! This is an auto-generated file.
~!! All edits will be lost!

../_userProject/defs/app.def.json
    |> tsActionTestWriter
    |> client/actions/app.actions.gen.test.ts

~!! This is an auto-generated file.
~!! All edits will be lost!
~!! WARNING !!~
*/
