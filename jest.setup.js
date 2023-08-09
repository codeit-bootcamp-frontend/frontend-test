import "whatwg-fetch";

import { server } from "./src/mocks";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
