import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import VueCollapse from "../VueCollapse.vue";

describe("VueCollapse", () => {
  it("renders properly", () => {
    const wrapper = mount(VueCollapse, {
      props: { when: false },
      slots: {
        default: "Main Content",
      },
    });
    expect(wrapper.text()).toContain("Main Content");
  });
});
