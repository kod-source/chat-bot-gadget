import { Ipad } from "../Entity/Ipad";

export interface IpadResponseObject {
  id: number,
  product_id: number,
  screen_size: number,
  chip: string,
  high_perform_camera: boolean,
  type_c: boolean,
  five_g: boolean,
  pencil_two: boolean,
  face_id: boolean,
  clean_display: boolean,
  center_frame: boolean,
  speaker_count: number,
  dual_speaker: boolean,
  thunderbolt: boolean,
  weight: number,
  high_refresh_rate: boolean,
  smart_connector: boolean,
  many_colors: boolean,
  created_at: Date,
  updated_at: Date
}

export class IpadFactory {
  static createFromResponse(res: IpadResponseObject): Ipad {
    return new Ipad(
      res.id,
      res.product_id,
      res.screen_size,
      res.chip,
      res.high_perform_camera,
      res.type_c,
      res.five_g,
      res.pencil_two,
      res.face_id,
      res.clean_display,
      res.center_frame,
      res.speaker_count,
      res.dual_speaker,
      res.thunderbolt,
      res.weight,
      res.high_perform_camera,
      res.smart_connector,
      res.many_colors,
      new Date(res.created_at),
      new Date(res.updated_at)
    );
  }
}