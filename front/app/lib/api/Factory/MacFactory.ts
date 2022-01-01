import { Mac } from '../Entity/Mac';

export interface MacResponseObject {
  id: number;
  product_id: number;
  apple_silicon: boolean;
  chips: string[];
  size: number;
  max_memory: number;
  max_cpu_core: number;
  max_gpu_core: number | null;
  max_storage: number;
  battery_driven_time: number;
  touch_bar: boolean;
  storages: string[];
  memorys: string[];
  mini_led_display: boolean;
  pro_motion_display: boolean;
  weight: number;
  in_camera_pixel: number;
  thunderbolt_count: number;
  hdmi_port: boolean;
  sd_card_slot: boolean;
  notch: boolean;
  wi_fi_six: boolean;
  power_adapter: number;
  fan_existence: boolean;
  created_at: Date;
  updated_at: Date;
}

export class MacFactory {
  static createFromResponse(res: MacResponseObject): Mac {
    return new Mac(
      res.id,
      res.product_id,
      res.apple_silicon,
      res.chips,
      res.size,
      res.max_memory,
      res.max_cpu_core,
      res.max_gpu_core,
      res.max_storage,
      res.battery_driven_time,
      res.touch_bar,
      res.storages,
      res.memorys,
      res.mini_led_display,
      res.pro_motion_display,
      res.weight,
      res.in_camera_pixel,
      res.thunderbolt_count,
      res.hdmi_port,
      res.sd_card_slot,
      res.notch,
      res.wi_fi_six,
      res.power_adapter,
      res.fan_existence,
      new Date(res.created_at),
      new Date(res.updated_at)
    );
  }
}
