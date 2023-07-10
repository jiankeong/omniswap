
import { enumToArray } from "../../types/enumToArray";
import { Providers } from "./Providers";
import {NetworkId} from "../../../networkDetails";

describe("Providers", () => {
  it("has a provider url for every network", () => {
    enumToArray(NetworkId).forEach(networkId => {
      expect(Providers.getProviderUrl(networkId as NetworkId)).toBeTruthy();
    });
  });
});
