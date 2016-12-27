import { normalize, schema } from '../../../index';

const data = [ { id: '123', name: 'Jim' }, { id: '456', name: 'Jane' } ];
const userSchema = new schema.Entity('users');

const userListSchema = new schema.Array(userSchema);
normalize({}, userListSchema);

const userListSchemaAlt = [ userSchema ];
normalize({}, userListSchemaAlt);
